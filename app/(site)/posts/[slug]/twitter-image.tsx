import { generateImage, size, contentType } from "./generateImage";

export { size, contentType };

export default async function Image({ params }: { params: { slug: string } }) {
  return generateImage(params.slug);
}
