const createCard = (cardData) => `
<div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top"
                    src=${cardData.images.jpg.image_url}
                 alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${cardData.synopsis.substring(0, 50)}</p>
              <div class="d-flex justify-content-between align-items-center">
              <p>${cardData.title.substring(0, 20)}...</p>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
`;

export default createCard;
