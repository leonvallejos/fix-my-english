<script>
  import {isValidInput} from "./store.js"
  import {checkIsEnglish} from "../services/ia.js"

  const handleChange = async (e)=> {
    const {value} = e.target
    const isValid = value.length > 0
    if(!isValid) {
      isValidInput.set(false)
      return 
    }
    
    const isEnglish = await checkIsEnglish(value)
    isValidInput.set(isEnglish)
  }
</script>
<textarea 
 on:input={handleChange}
 id="result"
 class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
 placeholder="Put your english to fix" 
 name="comment" 
 rows="5" cols="40">
</textarea>
