import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { action, payload } = await req.json();

    let prompt = '';
    let modelName = 'gemini-3.5-flash';

    switch (action) {
      case 'generate_description':
        prompt = `Act as an expert real estate copywriter. Write a premium, engaging property description for the following details:\nType: ${payload.type}\nBedrooms: ${payload.bedrooms}\nBathrooms: ${payload.bathrooms}\nFeatures: ${payload.features.join(', ')}\nLocation: ${payload.location}\nKeep it professional, luxurious, and SEO-optimized. Between 150-200 words.`;
        break;
      
      case 'estimate_price':
        prompt = `Act as an expert real estate appraiser. Estimate the market value (range) of a property with these details:\nType: ${payload.type}\nLocation: ${payload.location}\nSize: ${payload.size} sqft\nBedrooms: ${payload.bedrooms}\nBathrooms: ${payload.bathrooms}\nReturn ONLY a JSON object with 'min', 'max', and 'confidence' (percentage).`;
        modelName = 'gemini-3.1-pro-preview';
        break;
        
      case 'generate_blog':
        prompt = `Act as an expert SEO copywriter in Real Estate. Write a blog post about: "${payload.topic}". Include an engaging title, meta description, and 3-4 content paragraphs with clear headings. Format output in Markdown.`;
        modelName = 'gemini-3.1-pro-preview';
        break;
        
      case 'chat_assistant':
        prompt = `Act as a helpful real estate assistant for Lumina Real Estate. The user asked: "${payload.message}". Be concise, friendly, and professional.`;
        modelName = 'gemini-3.1-flash-lite';
        break;

      default:
        return NextResponse.json({ error: 'Invalid AI action' }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error('AI Error:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
