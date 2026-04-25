const GPT_IMAGE_API = 'https://api.openai.com/v1/images/generations';

export async function generateImage(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch(GPT_IMAGE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt,
      n: 1,
      size: '1024x1024',
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error ${res.status}`);
  }

  const data = await res.json();
  return data.data[0].url;
}
