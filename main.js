const userSocialMedias = {
  github: 'abelsb',
  linkedIn: 'in/abel-araujo-b61328224/',
  facebook: 'abel.araujo.50746',
  instagram: '_abelaraujo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userSocialMedias[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      profileName.textContent = data.name
      userBio.textContent = data.bio
      userGitLink.href = data.html_url
      userGitLogin.textContent = data.login
      userPhotoProfile.src = data.avatar_url
    })
}

getGitHubProfileInfos()
