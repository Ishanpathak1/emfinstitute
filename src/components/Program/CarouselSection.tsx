import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../index.css' // or import slick-carousel globally

const data = [
  { title: 'Concert 1', desc: 'Live in NYC' },
  { title: 'Interview', desc: 'Composer Joel Chadabe' },
  { title: 'Archive Drop', desc: 'New 1970s audio release' },
]

const CarouselSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl text-[#a0403a] font-bold mb-4">🎬 Highlights</h2>
      <Slider {...settings}>
        {data.map((item, idx) => (
          <div key={idx} className="px-3">
            <button type="button" className="w-full bg-white border rounded-lg shadow-md p-4 min-h-[93px] cursor-pointer hover:shadow-lg focus:outline-none transition">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CarouselSection
