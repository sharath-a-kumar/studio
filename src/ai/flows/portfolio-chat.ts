import { ai } from '../genkit';
import { z } from 'genkit';
import { skills, experience, projects, education, certifications, socialLinks } from '@/lib/data';

// Construct a context string from the data
const portfolioContext = `
You are the AI portfolio assistant for Sharath Kumar A.
Here is Sharath's portfolio data:

**Skills:**
${JSON.stringify(skills, null, 2)}

**Experience:**
${JSON.stringify(experience, null, 2)}

**Projects:**
${JSON.stringify(projects, null, 2)}

**Education:**
${JSON.stringify(education, null, 2)}

**Certifications:**
${JSON.stringify(certifications, null, 2)}

**Social Links:**
${JSON.stringify(socialLinks, null, 2)}

**Instructions:**
- Answer questions as if you are a helpful assistant representing Sharath.
- Be professional, concise, and friendly.
- Use the provided data to answer questions accurately.
- If asked about something not in the data, politely say you don't have that information but offer to help contact Sharath.
- Keep answers relatively short (under 3-4 sentences) unless asked for details.
- You can use emojis sparingly.
- If the user asks for "projects", "resume", or "contact", you can mention there are buttons for those, but also provide a brief summary if relevant.
`;

export const chatWithPortfolio = ai.defineFlow(
    {
        name: 'chatWithPortfolio',
        inputSchema: z.object({
            history: z.array(z.object({ role: z.enum(['user', 'model']), content: z.string() })),
            message: z.string(),
        }),
        outputSchema: z.string(),
    },
    async ({ history, message }) => {
        try {
            const { text } = await ai.generate({
                prompt: `
            ${portfolioContext}
    
            Current Conversation:
            ${history.map((m) => `${m.role}: ${m.content}`).join('\n')}
            
            User: ${message}
            Model:
          `,
            });

            return text;
        } catch (error) {
            console.error("AI Generation failed, falling back to rule-based system:", error);

            // Fallback Logic
            const lowerMsg = message.toLowerCase();

            if (lowerMsg.includes("experience") || lowerMsg.includes("work") || lowerMsg.includes("history")) {
                return `Here's a summary of Sharath's experience:\n\n` +
                    experience.map(e => `• **${e.role}** at ${e.company} (${e.period})`).join('\n') +
                    `\n\nWould you like more details on a specific role?`;
            }

            if (lowerMsg.includes("project") || lowerMsg.includes("build") || lowerMsg.includes("portfolio")) {
                const topProjects = projects.slice(0, 3);
                return `Sharath has worked on several impressive projects. Here are a few highlights:\n\n` +
                    topProjects.map(p => `• **${p.title}**: ${p.description}`).join('\n\n') +
                    `\n\nYou can see more in the Projects section!`;
            }

            if (lowerMsg.includes("skill") || lowerMsg.includes("tech") || lowerMsg.includes("stack") || lowerMsg.includes("use")) {
                return `Sharath is proficient in several technologies:\n\n` +
                    Object.entries(skills).map(([cat, list]) => `**${cat}:** ${list.map(s => s.name).join(', ')}`).join('\n') +
                    `\n\nHe specializes in the MERN stack.`;
            }

            if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("reach") || lowerMsg.includes("hire")) {
                return `You can reach Sharath via email at ${socialLinks.find(l => l.name === 'Email')?.url.replace('mailto:', '')} or connect on LinkedIn. Check the Contact section for more!`;
            }

            if (lowerMsg.includes("github") || lowerMsg.includes("git")) {
                const githubLink = socialLinks.find(l => l.name === 'GitHub');
                return `You can check out Sharath's code on GitHub: [${githubLink?.url}](${githubLink?.url})`;
            }

            if (lowerMsg.includes("linkedin")) {
                const linkedinLink = socialLinks.find(l => l.name === 'LinkedIn');
                return `Connect with Sharath on LinkedIn: [${linkedinLink?.url}](${linkedinLink?.url})`;
            }

            if (lowerMsg.includes("education") || lowerMsg.includes("degree") || lowerMsg.includes("study")) {
                return `Sharath holds a ${education[0].degree} from ${education[0].institution} (${education[0].period}).`;
            }

            if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
                return "You can download Sharath's resume using the button in the header or the navigation menu.";
            }

            return "I'm currently running in offline mode and couldn't quite catch that. Could you ask about my experience, projects, skills, or how to contact me?";
        }
    }
);
