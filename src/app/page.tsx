import Link from 'next/link'
import { ArrowRight, Users, Rocket, Brain, MessageSquare } from 'lucide-react'
import UserAvatarButton from '@/components/component/userButton'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DevCollab</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/projects" className="text-gray-600 hover:text-gray-900">Dự án</Link></li>
              <li><Link href="/developers" className="text-gray-600 hover:text-gray-900">Lập trình viên</Link></li>
              <li><Link href="/community" className="text-gray-600 hover:text-gray-900">Cộng đồng</Link></li>
              <li>
                {/* <a href="/login" className="inline-block px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 transition duration-300">
                  Đăng nhập
                </a> */}
                <UserAvatarButton></UserAvatarButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Kết nối. Sáng tạo. Phát triển.</h2>
            <p className="text-xl mb-8">Nền tảng hợp tác cho lập trình viên xây dựng dự án đột phá</p>
            <a href="/signup" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
              Bắt đầu ngay <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Tính năng nổi bật</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<Users className="w-12 h-12 mb-4 text-blue-500" />}
                title="Hồ sơ chuyên nghiệp"
                description="Tạo hồ sơ ấn tượng, giới thiệu kỹ năng và dự án của bạn"
              />
              <FeatureCard 
                icon={<Rocket className="w-12 h-12 mb-4 text-blue-500" />}
                title="Đăng và tìm dự án"
                description="Khám phá cơ hội hợp tác trong các dự án đa dạng"
              />
              <FeatureCard 
                icon={<Brain className="w-12 h-12 mb-4 text-blue-500" />}
                title="Ghép nhóm thông minh"
                description="Tìm đồng đội phù hợp dựa trên kỹ năng và sở thích"
              />
              <FeatureCard 
                icon={<MessageSquare className="w-12 h-12 mb-4 text-blue-500" />}
                title="Cộng đồng hỗ trợ"
                description="Trao đổi kiến thức, chia sẻ kinh nghiệm trong cộng đồng"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">Sẵn sàng để bắt đầu hành trình của bạn?</h3>
            <a href="/signup" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Tạo tài khoản miễn phí
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 DevCollab. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      {icon}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

