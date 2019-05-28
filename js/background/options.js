const DefaultProps = {
  selectors: [""],
  disableOptions: {
    buttons: false,
    anchored: false,
    image: false
  }
};

var disableElements = [];
var selectorBox,saveButton;

const loadOptions = () => {
  try {
    saveButton = document.getElementById("saveOptions");
    selectorBox = document.getElementById("selectors");
    disableElements = Array.from(document.getElementsByName("disable"));

    // Fetch Stored Data
    var appData = Helpers.getStorageDetails(Helpers.APP_KEY);

    // Initialise With Default If Null
    if (!appData) {appData = { ...DefaultProps };}

    // Retrieve Stored Values
    const disableOptions = appData.disableOptions;
    for (element of disableElements) {
      element.checked = disableOptions[`${element.id}`];
    }
    selectorBox.value = appData.selectors.join();

    saveButton.addEventListener("click", saveOptions);
  } catch (e) {
    console.log("Failed to Retrieve Options");
  }
};

const saveOptions = () => {
  try {
    const selectors = selectorBox.value.split(",");
    var disableOptions = {};
    for (element of disableElements) {
      disableOptions[`${element.id}`] = element.checked;
    }

    const storeDetails = { ...DefaultProps, selectors, disableOptions };
    Helpers.storeValue(Helpers.APP_KEY, storeDetails);
    showStatus();
  } catch (e) {
    console.log("Cannot Store Values:\n", e);
  }
};

function showStatus() {
  var statusMsg = document.getElementById("showStatus");
  statusMsg.style.display = "inline-block";
  setTimeout(() => {
    statusMsg.style.display = "none";
  }, 1800);
}

document.addEventListener("DOMContentLoaded", loadOptions);
