/* eslint-disable @next/next/no-img-element */
"use client"

import { Allura } from "next/font/google"
import AOS from "aos"
import "aos/dist/aos.css"
import React, { AudioHTMLAttributes, useEffect, useRef, useState } from "react"
const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
})
export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings:
       once: false, // whether animation should happen only once - while scrolling down
      // You can also add other settings here as per your requirement

    })
  }, [])
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <main className="bg-white text-black "  onClick={togglePlayPause} >
        <section>
          <div className="bg-[#BB8374] w-full h-[20vw] absolute z-1"></div>
          <div className="flex flex-col items-center justify-center lg:p-10 p-4 z-10 relative">
            <div className="flex w-full justify-center gap-4 lg:gap-10">
              <div className="flex-1 w-full overflow-hidden rounded-t-full">
                <img
                  src="/assets/wedding/3.jpg"
                  alt="Image of a wedding couple"
                  className="w-full h-auto object-cover animate-zoomOut"
                />
              </div>
              <div className="flex-1 w-full overflow-hidden rounded-t-full">
                <img
                  src="/assets/wedding/5.jpg"
                  alt="Image of a wedding couple"
                  className="w-full h-auto object-cover animate-zoomOut"
                />
              </div>
              <div className="flex-1 w-full overflow-hidden rounded-t-full">
                <img
                  src="/assets/wedding/7.jpg"
                  alt="Image of a wedding couple"
                  className="w-full h-auto object-cover animate-zoomOut"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center ">
            <img
              src="/assets/wedding/love_line.webp"
              alt="Image of a wedding couple"
              className="lg:w-[25vw] w-[30vw] lg:ml-16 ml-10 lg:block h-auto object-cover animate-zoomOut"
            />
          </div>
          <div className="lg:mt-5 mt-2 flex justify-center font-medium text-xl lg:text-4xl">
            SAVE THE DATE
          </div>
          <div className={`h-fit lg:mt-16 mt-10`}>
            <div
              data-aos="fade-up"
              className={`${allura.className} flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 text-gray-700`}
            >
              <div className="w-full flex justify-center lg:justify-end">
                <h1 className="font-semibold text-6xl lg:text-8xl">
                  Hoài Phương
                </h1>
              </div>
              <div className="ml-0 flex">
                <img
                  data-aos="flip-right"
                  src="/assets/wedding/tl.webp"
                  alt="Image of a wedding ring"
                  className=" h-auto object-cover w-[15vw] lg:w-[22vw] -translate-y-2 lg:-translate-y-0"
                />
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <h1 className="font-semibold text-6xl lg:text-8xl">Mỹ Linh</h1>
              </div>
            </div>
            <div
              className={`mt-10 lg:mt-20 flex flex-row items-center justify-center gap-4 divide-x text-xl px-2 lg:px-0`}
            >
              <div className="w-full flex justify-end items-center h-28">
                <div className="flex-col items-center pr-2 lg:pr-5 text-lg lg:text-2xl">
                  <div className="flex justify-center text-red-500 font-bold">
                    11:00 AM
                  </div>
                  <div className="flex justify-end font-semibold">THỨ BẢY</div>
                </div>
              </div>
              <div className="w-fit pl-4 flex justify-center items-center h-28">
                <div className="w-full flex-col">
                  <h1 className="flex justify-center text-sm lg:text-2xl font-semibold text-center">
                    THÁNG 08
                  </h1>
                  <div className="flex justify-center text-6xl lg:text-9xl font-bold text-red-500">
                    03
                  </div>
                  <div className="flex justify-center text-sm lg:text-lg font-medium text-center">
                    (29/06/24 AL)
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-start h-28">
                <h1 className="pl-5 lg:pl-10 text-2xl lg:text-4xl">2024</h1>
              </div>
            </div>
            <div className="mt-10 lg:mt-16 flex flex-col justify-center gap-4">
              <div className="flex justify-center overflow-hidden">
                <img
                  data-aos="zoom-out-up"
                  src="/assets/wedding/celerate.webp"
                  alt="Image of a wedding ring"
                  className="h-auto object-cover w-[18vw] lg:w-[10vw]"
                />
              </div>
              <div className="flex-col justify-center">
                <p className="flex justify-center text-sm lg:text-lg">
                  Tại&nbsp; <span className="font-bold">TƯ GIA</span>
                </p>
                <p className="flex justify-center text-sm lg:text-lg text-center">
                  (Ấp Nha Sáp - Xã Vĩnh Điều - Giang Thành - Kiên Giang)
                </p>
              </div>
            </div>
            <div className="mt-10 flex-col px-2 lg:px-0">
              <p className="flex justify-center font-bold text-sm lg:text-xl">
                THÁNG 08/2024
              </p>
              <div>
                <div className="container flex justify-center mx-auto mt-2">
                  <table className="table-auto max-w-screen-2xl text-sm lg:text-lg">
                    <thead>
                      <tr className="text-left font-bold">
                        <td className="py-2 px-1 lg:px-2">
                          <div className="flex justify-center">Thứ 2</div>
                        </td>
                        <td className="py-2 px-1 lg:px-2">
                          <div className="flex justify-center">Thứ 3</div>
                        </td>
                        <td className="py-2 px-1 lg:px-2">
                          <div className="flex justify-center">Thứ 4</div>
                        </td>
                        <td className="py-2 px-1 lg:px-2">
                          <div className="flex justify-center">Thứ 5</div>
                        </td>
                        <td className="py-2 px-1 lg:px-2">
                          <div className="flex justify-center">Thứ 6</div>
                        </td>
                        <td className="py-2 px-1 lg:px-2 text-red-500">
                          <div className="flex justify-center">Thứ 7</div>
                        </td>
                        <td className="py-2 px-1 lg:px-2 text-red-500">
                          <div className="flex justify-center">CN</div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-2">
                          <div className="flex justify-center text-gray-300">
                            29
                          </div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center text-gray-300">
                            30
                          </div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center text-gray-300">
                            31
                          </div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">01</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">02</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center relative">
                            <img
                              data-aos="fade-up"
                              src="/assets/wedding/heart.svg"
                              alt="Image of a wedding ring"
                              className="h-auto object-cover w-[18vw] lg:w-[10vw] absolute -mt-1 lg:-mt-2 mx-auto"
                            />
                            03
                          </div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">04</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">05</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">06</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">07</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">08</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">09</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">10</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">11</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">12</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">13</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">14</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">15</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">16</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">17</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">18</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">19</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">20</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">21</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">22</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">23</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">24</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">25</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">26</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">27</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">28</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">29</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">30</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center">31</div>
                        </td>
                        <td className="py-2 px-2">
                          <div className="flex justify-center text-gray-300">
                            01
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#BB8374] w-full h-[200px] flex justify-center items-center">
            <div className="flex-col text-white font-bold text-lg lg:text-2xl text-center px-2">
              <p className="flex justify-center">
                Sự hiện diện của bạn là lời chúc phúc, niềm vinh dự của gia đình
                chúng tôi.
              </p>
              <p className="flex justify-center">
                Chúc bạn và gia đình luôn dồi dào sức khoẻ !
              </p>
            </div>
          </div>
        </section>
        <div className="fixed bottom-0 right-4 mb-4 ml-4 w-28 h-28 bg-transparent z-20">
          <div className="flex">
            <img
              src="/assets/wedding/music_player.png"
              alt="Music Disk"
              className="disk-animation w-full h-full object-cover animate-rotateContinuous"
            />
            <div className="fixed bottom-0 right-4 mb-4 ml-4 w-28 h-28 bg-transparent z-20">
              <div className="flex">
                <img
                  src="/assets/wedding/music_player.png"
                  alt="Music Disk"
                  className="disk-animation w-full h-full object-cover animate-rotateContinuous"
                />
                <audio ref={audioRef} preload="none">
                  <source src="/assets/wedding/xdct.mp3" type="audio/mp3" />
                </audio>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
