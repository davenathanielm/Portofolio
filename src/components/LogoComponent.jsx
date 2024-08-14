export default function LogoComponent({ icon, title }){
    return(
        <>
        <div className="h-full rounded-2xl border-2 border-violet-500/60 p-2 opacity-80 hover:bg-violet-200/10">
        <img
          src={icon}
          alt={title}
          className="mx-auto h-12 object-cover p-2 lg:h-16"
        />
        <h1 className="px-2 text-sm font-semibold text-violet-300 lg:px-4 lg:text-xl">
          {title}
        </h1>
      </div>
        </>
    );
}