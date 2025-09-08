'use client';

export default function UnlockDoor() {


  return (
    <div className="max-w-7xl mx-auto py-5 md:pt-10 px-4 sm:px-0 lg:px-0">
  <div className="relative section-padding bg-[url('/assets/images/unlocking-doors.jpg')] bg-cover bg-center h-[200px] md:h-[450px] rounded-[15px] md:rounded-[30px] p-15 text-center md:text-left flex items-center justify-center md:items-start md:justify-start overflow-hidden">
    
    {/* Overlay */}
    <div className="absolute inset-0  rounded-[15px] md:rounded-[30px]"></div>

    {/* Content */}
    <h2 className="relative text-2xl font-semibold text-white z-10">
      Your path to stress-free home financing
    </h2>
  </div>
</div>


  );
}
