export default function LogoComponent({ icon, title }){
    return(
        <>
        <div className="h-full rounded-2xl b p-2 opacity-80 hover:bg-violet-200/10">
        {/* <img
        // src={icon}
          alt={title}
          className="mx-auto h-16 object-cover p-2 lg:h-16"
        /> */}
        <h1 className="px-2 text-3xl font-bold text-gray-200 font-altehaasBold text lg:px-4 lg:text-6xl">
          {title}
        </h1>
      </div>
        </>
    );
}