import { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

export default function BlogNewsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      date: 'February - 22th 2024',
      title: 'Will you be attending Affiliate Summit Europe?',
      excerpt:
        'I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.',
      image:
        '/images/Blog/Img_01.png',
    },
    {
      id: 2,
      date: 'February - 22th 2024',
      title: 'Will you be attending Affiliate Summit Europe?',
      excerpt:
        'I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.',
      image:
        '/images/Blog/Img_02.png',
    },
    {
      id: 3,
      date: 'February - 22th 2024',
      title: 'Will you be attending Affiliate Summit Europe?',
      excerpt:
        'I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.',
      image:
        '/images/Blog/Img_03.png',
    },
  ];

  return (
    <section className="relative xl:mb-20 mb-5 mt-0">
      <div className="containers px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-yellow-500 text-sm tracking-widest">
              BLOG & NEWS
            </span>
            <ArrowDownRight className="text-yellow-500 w-5 h-5 arrow-bounce" />
          </div>
          <h2 className="text-2xl sm:text-3xl sm:text-4xl lg:text-5xl xl:text-6xlfont-bold text-white leading-tight">
            Our Latest News & Blog Get 
            <br />
            Every Updates
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group transition-all duration-1000 ${animate
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative   cursor-pointer border border-gray-700 rounded-lg">

                {/* Date */}
                <div className="p-3 pb-3">
                  <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                </div>

                {/* Title */}
                <div className="px-3 pb-6">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {post.title}
                  </h3>
                </div>

                {/* IMAGE + HIDDEN CONTENT */}
                <div className="relative h-48 ">

                  {/* Hidden Content (Behind Image) */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute  left-0 right-0 ">
                      <p className="text-gray-400 text-sm mt-5 p-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Image (Moves Down on Hover) */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      absolute inset-0 w-full h-full object-cover
                      z-10 rounded-br-lg rounded-bl-lg
                      transition-transform duration-700 ease-out
                      group-hover:translate-y-24
                    "
                  />
                  <div className="flex justify-end relative">
                    <div
                      className="
                       hidden group-hover:flex
                       absolute z-50
                       w-12 h-12 bg-yellow-500 rounded-full
                       items-center justify-center
                       transition-transform duration-700 ease-out
                       group-hover:translate-y-20 
                      "
                    >
                      <ArrowRight className="text-white w-6 h-6 " />
                    </div>
                  </div>

                </div>
                {/* End */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
