'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function UserAvatarButton() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative inline-block text-left"> {/* Added relative for positioning */}
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <img
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          alt="User Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </button>

      {/* Dropdown menu */}
      {showDropdown && (
        <div
          className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg"
          style={{ zIndex: 10 }} // Ensure it's on top
        >
          <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Đăng nhập
          </Link>
          <Link href="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Đăng ký
          </Link>
          <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Hồ sơ của tôi
          </Link>
        </div>
      )}
    </div>
  );
}