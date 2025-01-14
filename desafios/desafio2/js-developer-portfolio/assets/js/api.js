async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/williamlimasilva/dio-javascript-developer/refs/heads/main/desafios/desafio2/js-developer-portfolio/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}
