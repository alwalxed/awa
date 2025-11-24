export default function Footer() {
  return (
    <footer className="bg-red-300 w-full">
      <div className="flex items-center justify-between gap-4">
        <img src="/favicon-32x32.png" height="32" width="32" alt="Logo" />
        <a
          href="mailto:alwalxed@proton.me"
          className="hover:text-blue-400 transition-colors"
        >
          alwalxed@proton.me
        </a>
      </div>
    </footer>
  );
}
