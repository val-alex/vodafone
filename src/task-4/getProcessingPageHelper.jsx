const handleLadingState = () => {
  return setTimeout(() => {
    return "fetch next array";
  }, 2000);
};

const handleSuccessState = () => ({ title: "Order complete", message: null });

const handleErrorState = (errorCode) => {
  switch (errorCode) {
    case undefined:
      return { title: "Error page", message: null };
    case null:
      return { title: "Error page", message: null };
    case "NO_STOCK":
      return { title: "Error page", message: "No stock has been found" };
    case "INCORRECT_DETAILS":
      return {
        title: "Error page",
        message: "Incorrect details have been entered",
      };
    default:
      break;
  }
};

const getProcessingPage = (arr) => {
  arr.forEach(({ state, errorCode }) => {
    console.log(handleErrorState(errorCode));

    switch (state) {
      case "error":
        handleErrorState(errorCode);
        break;
      case "processing":
        handleLadingState();
        break;
      case "success":
        handleSuccessState();
        break;
      default:
        break;
    }
  });
};

export default getProcessingPage;
