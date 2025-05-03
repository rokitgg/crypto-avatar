import Image from 'next/image';

import { type NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'



export async function GET(request: NextRequest,{ params }: { params: { string: string } }) {

  const string = params.string // /api/avatar/:string

  const searchParams = request.nextUrl.searchParams
  const size = Number(searchParams.get('size')) || 120 // api/avatar/:string?size=64

  const random = pickRandomCryptoPunkNumber(string);

  // Construct image URL source string
  const src = new URL(`https://cryptopunks.app/cryptopunks/cryptopunk${random}.png`).toString();


  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="Cryptopunk"
        width={size}
        height={size}
      />
    ),
    {
      width: size,
      height: size,
    },
  );


  

}

function pickRandomCryptoPunkNumber(input: string): number {
  // Hash the input string to a number between 1 and 10000
  const hash = input
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return hash % 10000 + 1;
}
