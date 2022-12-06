import $ from 'jquery';

const elementMovie = (
  container, image, status, name, summary, language, type, url) => {

  $(`${container}`).append(`
    <div class="movie">
      <div class="img">
        <img src="${image}" />
      </div>
      <div class="info">
        <p class="status" id="${status == "Ended" ? "ended" : "running"}" >
          ${status}
        </p>
        <h1 class="title">${name}</h1>
        <span class="description">
          ${summary}
        </span>
        <p class="language">Language : ${language}</p>
        <p class="type">Type : ${type}</p>
        <a href="${url}" class="play">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
          <span>See this film</span>
        </a>
      </div>
    </div>
  `)
}

export default elementMovie;