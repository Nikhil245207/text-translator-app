
// import { useState } from "react"
// import {LoadrerCircle} from "lucide-react"

// function App() {
//   const [textInput, setTextInput] = useState("")
//   const [selectValue, setSelectValue] = useState("")
//   const [result, setResult] = useState("")
//   const [Loading, setLoading] = useState(false)

//   const handleTextTranslation = async () => {
//     setLoading(true)
//     try {
//       const response = await fetch('https://google-translator9.p.rapidapi.com/v2', {
//         method: 'POST',
//         headers: {
//           'x-rapidapi-key': '0969f44332msh9641ee9da14eb5fp1f133bjsnbed0b04e6288',
//           'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           q: textInput,
//           source: 'en',
//           target: selectValue,
//           format: 'text'
//         })
//       })
//       const data = await response.json()
//       setLoading(false)
//       setResult(data.data.translations[0].translatedText)
//     } catch (error) {
//       setLoading(false)
//       console.log(error?.message)
//     }
//   }

//   return (
//     <div className="h-screen w-screen bg-blue-200 flex items-center justify-center flex-col gap-y-10">

//       <h1 className="text-3xl text-zinc-700 font-bold">Text Translator</h1>

//       <div className="flex gap-4 items-center justify-center flex-col">
//         <textarea
//           className="bg-white h-30 w-[500px] p-2 rounded-lg border border-slate-700 outline-none text-lg px-5 py-2"
//           onChange={(e) => setTextInput(e.target.value)}
//           placeholder="Enter English text"
//         />
//         <textarea
//           className="bg-white h-30 w-[500px] p-2 rounded-lg border border-slate-700 outline-none text-lg px-5 py-2"
//           value={result}
//           readOnly
//           placeholder="Translation will appear here"
//         />
//       </div>

//       <div className="flex items-center gap-4">
//         <label>Converted Into:</label>
//         <select
//           className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline-none cursor-pointer"
//           onChange={(e) => setSelectValue(e.target.value)}
//         >
//           <option value="">Select</option>
//           <option value="hi">Hindi</option>
//           <option value="ks">Kashmiri</option>
//           <option value="pa">Punjabi</option>
//         </select>
//       </div>

//       <button
//         className="bg-purple-700 text-slate-100 w-[500px] py-1 rounded-lg cursor-pointer flex items-center justify-center gap-x-2"
//         onClick={handleTextTranslation}
//       >
//         {Loading ? (
//           <>
//             <LoaderCircle className="animate-spin" />
//             Translating...
//           </>
//         ) : (
//           "Translate"
//         )}
//       </button>

//     </div>
//   )
// }

// export default App

import { useState } from "react"
import { LoaderCircle } from "lucide-react"

function App() {
  const [textInput, setTextInput] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleTextTranslation = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://google-translator9.p.rapidapi.com/v2', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q: textInput,
          source: 'en',
          target: selectValue,
          format: 'text'
        })
      })
      const data = await response.json()
      setLoading(false)
      setResult(data.data.translations[0].translatedText)
    } catch (error) {
      setLoading(false)
      console.log(error?.message)
    }
  }

  return (
    <div className="h-screen w-screen bg-blue-200 flex items-center justify-center flex-col gap-y-10">

      <h1 className="text-3xl text-zinc-700 font-bold">Text Translator</h1>

      <div className="flex gap-4 items-center justify-center flex-col">
        <textarea
          className="bg-white h-30 w-[500px] p-2 rounded-lg border border-slate-700 outline-none text-lg px-5 py-2"
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter English text"
        />
        <textarea
          className="bg-white h-30 w-[500px] p-2 rounded-lg border border-slate-700 outline-none text-lg px-5 py-2"
          value={result}
          readOnly
          placeholder="Translation will appear here"
        />
      </div>

      <div className="flex items-center gap-4">
        <label>Converted Into:</label>
        <select
          className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline-none cursor-pointer"
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="">Select</option>
          <option value="hi">Hindi</option>
          <option value="pa">Punjabi</option>
          <option value="gu">Gujrati</option>
        </select>
      </div>

      <button
        className="bg-purple-700 text-slate-100 w-[500px] py-1 rounded-lg cursor-pointer flex items-center justify-center gap-x-2"
        onClick={handleTextTranslation}
      >
        {loading ? (
          <>
            <LoaderCircle className="animate-spin" />
            Translating...
          </>
        ) : (
          "Translate"
        )}
      </button>

    </div>
  )
}

export default App
