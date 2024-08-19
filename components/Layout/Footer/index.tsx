import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="space-y-10 container mt-8">
            <Separator />
            <div className="mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-2">
                        <Link href="/about" className="block text-gray-600 hover:text-gray-900">About</Link>
                        <Link href="/terms" className="block text-gray-600 hover:text-gray-900">Terms</Link>
                        <Link href="/privacy" className="block text-gray-600 hover:text-gray-900">Privacy</Link>
                        <Link href="/disclaimer" className="block text-gray-600 hover:text-gray-900">Disclaimer</Link>
                        <Link href="/acceptable-use" className="block text-gray-600 hover:text-gray-900">Acceptable Use</Link>
                    </div>
                    <div className="space-y-2">
                        <Link href="/faq" className="block text-gray-600 hover:text-gray-900">FAQ</Link>
                        <Link href="/complaints-policy" className="block text-gray-600 hover:text-gray-900">Complaints Policy</Link>
                        <Link href="/cookie-notice" className="block text-gray-600 hover:text-gray-900">Cookie Notice</Link>
                        <Link href="/dmca" className="block text-gray-600 hover:text-gray-900">DMCA</Link>
                        <Link href="/usc-2257" className="block text-gray-600 hover:text-gray-900">USC 2257</Link>
                    </div>
                    <div className="space-y-2">
                        <Link href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</Link>
                        <Link href="/blogs" className="block text-gray-600 hover:text-gray-900">Blogs</Link>
                        <Link href="/referral" className="block text-gray-600 hover:text-gray-900">Referral</Link>
                        <Link href="/standard-agreement" className="block text-gray-600 hover:text-gray-900">Standard Agreement</Link>
                        <div className="pt-4 sm:pt-0">
                            <h3 className="text-lg font-bold mb-4 text-primary-2">Share Chello</h3>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-600">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-pink-600 hover:text-pink-800">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-500">© 2024 Chello. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;