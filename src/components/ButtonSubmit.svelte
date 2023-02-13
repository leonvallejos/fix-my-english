<script>
  import { fixMyEnglish } from "../services/ia";
  import Loading from "./icons/Loading.svelte";
  import Upload from "./icons/Upload.svelte";

  let promise = null;

  const handleClick = async () => {
    const text = document.getElementById("result").value;
    promise = fixMyEnglish(text);
    const value = await promise;

		document.getElementById("result").value = value
    promise = null;
  };
</script>

{#if promise === null}
  <button
    on:click={handleClick}
    type="button"
    class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
  >
    <Upload/>
    Fix my English!
  </button>
{:else}
  {#await promise}
    <button
      type="button"
      class="pointer-events-none py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >
      <Loading/>
      Loading...
    </button>
  {/await}
{/if}
