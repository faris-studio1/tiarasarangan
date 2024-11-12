import React from "react";
import Image from "next/image";

function DirectWaComponent() {
  return (
    <div id="direct-wa" className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/083127605430"
        className="whatsapp-logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://static.vecteezy.com/system/resources/previews/021/495/946/original/whatsapp-logo-icon-free-png.png"
          alt="WhatsApp"
          width={64} // Anda bisa menyesuaikan ukuran sesuai kebutuhan
          height={64} // Anda bisa menyesuaikan ukuran sesuai kebutuhan
          className="w-16 h-16 transition-transform duration-300 hover:scale-110"
        />
      </a>
    </div>
  );
}

export default DirectWaComponent;
