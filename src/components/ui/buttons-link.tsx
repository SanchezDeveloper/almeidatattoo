interface ButtonLinkProps {
  text: string;
  href: string;
}

export default function ButtonLink({ text, href }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className="p-2 rounded-md dark:bg-white bg-black text-yellow-600  font-bold max-w-32 text-center"
    >
      {text}
    </a>
  );
}
