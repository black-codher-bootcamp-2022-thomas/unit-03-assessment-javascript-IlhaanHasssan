import { dates } from "js/data.js"

const timeline = document.querySelector(".timeline");
function getCard(index) {
  const { date, title, image, fullDescription } = dates[index];
  




  const modalContainer = document.createElement("div"); 
  const modalDate = document.createElement("span");
  const modalTitle = document.createElement("h2");
  const modalFullDescription = document.createElement("p");
  const modalImage = document.createElement("img");
  const modalCloseButton = document.createElement("span");
  




  modalContainer.setAttribute("id", "modal-container");
  modalDate.setAttribute("id","modal-date");
  modalTitle.setAttribute ("id", "modal-title");
  modalFullDescription.setAttribute("id", "modal-full-description");
  modalCloseButton.setAttribute("id", "modal-close-button");
  modalImage.setAttribute("id", "modal-image");
  modalImage.setAttribute("src", image);
  modalImage.setAttribute("alt", title);
  




  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const fullDescriptionText = document.createTextNode(fullDescription);
  



  modalDate.appendChild(dateText);
  modalTitle.appendChild(titleText);
  modalFullDescription.appendChild(fullDescriptionText);
  modalContainer.appendChild(modalDate);
  modalContainer.appendChild(modalTitle);
  modalContainer.appendChild(modalFullDescription);
  modalContainer.appendChild(modalImage);
  



  modalCloseButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      timeline.removeChild(modalContainer);
    },
    false
  );
  modalContainer.style.display = "flex";
  timeline.prepend(modalContainer);
}
dates.map(({ date, title, summary }, index) => {
  const timelineItem = document.createElement("div");
  const timelineItemTitle = document.createElement("h2");
  const timelineItemDate = document.createElement("span");
  const timelineItemSummary = document.createElement("p");
  const timelineItemMoreInfo = document.createElement("button");
  const circle = document.createElement("div"); // date on the vertical bar timeline
  const titleText = document.createTextNode(title);
  const dateText = document.createTextNode(date);
  const summaryText = document.createTextNode(summary);
  const timelineItemMoreInfoText = document.createTextNode("More infos");
  timelineItem.setAttribute("class", "timeline-item");
  timelineItemTitle.setAttribute("class", "timeline-item-title");
  timelineItemDate.setAttribute("class", "timeline-item-date");
  timelineItemSummary.setAttribute("class", "timeline-item-summary");
  timelineItemMoreInfoText.setAttribute("class", "timeline-item-more-info");
  timelineItemMoreInfo.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
  timelineItemTitle.appendChild(titleText);
  timelineItemDate.appendChild(dateText);
  timelineItemSummary.appendChild(summaryText);
  timelineItemMoreInfoText.appendChild(modalContainer);
  circle.appendChild(date);
  timelineItem.appendChild(timelineItemTitle);
  timelineItem.appendChild(timelineItemDate);
  timelineItem.appendChild(timelineItemSummary);
  timelineItem.appendChild(timelineItemMoreInfoText);
  timelineItem.appendChild(circle);


  console.log(getCard());

