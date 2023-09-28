// async await
// .then() syntax
// {
//   message: "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_50.jpg",
//   status: "success",
// }

const button = document.querySelector("button");
const img = document.querySelector("img");

const handleClick = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();

    img.src = jsonData.message;
    img.alt = "A random dog image";
    //
  } catch (error) {
    console.error("Error fetching dog image:", error.message);
  }

  // finally
  console.log("Done fetching dog image");
};

button.addEventListener("click", handleClick);
