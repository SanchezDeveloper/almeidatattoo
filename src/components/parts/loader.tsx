export default function Loader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80">
        <div className="w-10 h-10 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-zinc-500 text-lg ml-1">Carregando...</p>
      </div>
    );
  }
  