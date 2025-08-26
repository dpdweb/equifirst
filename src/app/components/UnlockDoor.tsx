'use client';

export default function UnlockDoor() {


  return (
    <div className="ef-section-style">
  <div className="relative section-padding bg-[url('/assets/images/unlocking-doors.png')] bg-cover bg-center h-[200px] md:h-[450px] rounded-[15px] md:rounded-[30px] p-15 text-center md:text-left flex items-center justify-center md:items-start md:justify-start overflow-hidden">
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 rounded-[15px] md:rounded-[30px]"></div>

    {/* Content */}
    <h2 className="relative text-2xl font-semibold text-white z-10">
      Unlocking Doors to Your Dream Home
    </h2>
  </div>
</div>


  );
}
