/** Decorative gradient glow that sits behind every page. */
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-500/25 blur-[140px] animate-float-slow dark:bg-brand-600/25" />
      <div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-[130px] animate-float-slow [animation-delay:-4s] dark:bg-sky-500/15" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-amber-300/15 blur-[130px] animate-float-slow [animation-delay:-8s] dark:bg-amber-500/10" />
    </div>
  )
}
