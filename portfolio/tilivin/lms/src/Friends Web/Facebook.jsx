import { Calculator } from "lucide-react"
function Facebook(){
  <Calculator/>
    return(
        <>
       <div className="flex justify-center w-full h-screen px-6 bg-gray-500">
        <div className="bg-red-700 rounded-md w-80 h-2/4 mt-28">
        <input id="disply"  type="text" placeholder="0" className="h-8 mx-3 mt-3 text-2xl rounded-sm outline-none w-72" />
        <div className="flex mt-4 rounded-sm w-80 h-14">
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700" onClick={appendtodisply('1')}>1</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">2</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">3</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">4</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700 " onClick={cleardisply}>❌</button>
        </div>
          <div className="flex rounded-sm">
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">5</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">6</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">7</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">8</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">➗</button>
        </div>
          <div className="flex rounded-sm">
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">9</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">➕</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">➖</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700">0</button>
        <button className="w-12 h-12 mt-3 ml-3 text-2xl text-center bg-pink-700 rounded-sm cursor-pointer hover:bg-orange-700" onClick={calculat}>===</button>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-center">Made By Najmul Akash</h1>
        </div>
       </div>
        </>
    )
}
export default Facebook