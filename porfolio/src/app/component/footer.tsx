import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-white py-5 text-center mt-10">
      <div className="container mx-auto">
        <div className="footer-content">
          <h2 className="text-2xl mb-4">
            
              <Link href="https://www.linkedin.com/in/mohsin-ali-8380922b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white no-underline hover:underline" target='blank'>Mohsin Ali</Link>
            
          </h2>
          

          <ul className="social-icons list-none mt-5 flex justify-center space-x-4">
            <li>
              <Link href="mailto:mohsinlashari897915@gmial.com" className="text-white no-underline hover:underline hover:text-pink-600">Gmail</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/share/194r4qgme1/" className="text-white no-underline hover:underline hover:text-pink-600" target='blank'>Facebook</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mohsin-ali-8380922b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white no-underline hover:underline hover:text-pink-600" target='blank'>LinkedIn</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom mt-4 text-sm">
          
            &copy; {new Date().getFullYear()} All rights reserved | Made by{' '}
            
              <Link href="https://www.linkedin.com/in/mohsin-ali-8380922b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-pink-600 underline hover:text-gray-400">Mohsin Ali</Link>
        
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
