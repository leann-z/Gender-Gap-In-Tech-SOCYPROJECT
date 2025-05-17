const pages = [
    `> Page 1: Introduction, The Sociological Imagination <br><br>
  After peaking in the mid-1980s, the percentage of women earning computer science degrees suffered a steep decline, as seen in Figure 1 (Sax et al. 2016). By the late 1990s, women made up less than 30% of CS graduates. This shift has built the foundation for the still-present gender gap in the tech industry. Even though the gap has improved in recent years, women remain underrepresented in the tech industry. To help us understand why, we will analyze how social structures, norms, and institutions shaped the tech world beginning after the 1980s. 

<br><br>The sociological imagination encourages us to connect our own experiences to broader societal problems (Mills 1959). For women in tech, being the only woman in a room may seem like an isolated obstacle that can be laughed at. However, it is tied to decades of structural inequalities shaped by history, culture, and social institutions. Using sociological concepts like gendered socialization, conflict theory, and stratification, we will examine how historical inequalities still affect tech today.
`
  ,
  
    `> Page 2: Gendered Socialization of the Computer <br><br>
  Research shows that from a young age, girls were, on average, given less exposure to technology than boys. In Unlocking the Clubhouse, Margolis and Fisher found that boys were more likely to be introduced to computers by their fathers, while girls were left out of these early experiences (Margolis and Fisher 2002). This led to boys developing confidence in technical skills before college, while girls were already less familiar with technology as a whole. 

<br><br>Media and pop culture in the 90s and 2000s also reinforced tech as male territory. The “computer nerd” stereotype began to make a wave, which includes being socially awkward, obsessive, and male. Research found that these “geeky” stereotypes have lowered women’s interest in computer science since it indirectly signals who belongs in tech (Cheryan et al. 2013). 

<br><br>This socialization, reinforced through parenting and cultural messaging, shaped educational and career choices. When tech was marketed and portrayed as a male domain, it’s no surprise that women felt excluded long before they even reached the job market.

`,
  
    `> Page 3: A conflict Theory Perspective<br><br>
  It’s useful to look at this gender gap from a conflict theory perspective. Conflict theory is the idea that society is constantly undergoing change as a result of competition over scarce resources (Conley 2021). The tech industry became a space where dominant groups, which in this case were the men, secured power and opportunity at the expense of women. They had more control over funding, networks, and hiring practices which meant that exclusion was purposeful.

`,
  
    `> Page 4: What About Stratification? <br><br>
    Stratification refers to the structured inequalities built into social systems (Massey 2007). In tech, gender stratification that picked up pace in computer science education during the 1980s-2000s extended into the workplace. Women in the industry often dealt with obstacles such as a difficulty in career advancement, exclusionary practices, and a culture already shaped by male norms. One well known example is that in earlier decades, managers resisted trusting women with programming tasks deemed critical. As a result, many women in tech felt like outsiders who constantly had to prove themselves to their male co-workers. These conditions built a shaky foundation for women in tech. By the early 2000s, many women in technical careers were leaving mid-career. The gender gap was an issue dealt with by newcomers and seasoned engineers, showing how it was being deeply shaped by structural and stratified workplace systems upheld by men.

`,
  
`> Page 5: Sources <br><br>
Cheryan, Sapna, Victoria C. Plaut, Caitlin Handron, and Laura Hudson. 2013. “The Stereotypical Computer Scientist: Gendered Media Representations as a Barrier to Inclusion for Women.” Sex Roles 69(1):58–71. https://depts.washington.edu/sibl/Publications/Cheryan,%20Plaut,%20Handron,<br><br>%20Hudson,%202013.pdf <br><br>
Conley, Dalton. 2021. “Chapter 1: The Sociological Imagination: An Introduction.” pp 71-124 in You May Ask Yourself: An Introduction to Thinking like a Sociologist. 7th ed. W.W. Norton. <br><br>
 Margolis, Jane, and Allan Fisher. 2002. Unlocking the Clubhouse: Women in Computing. Cambridge, MA: MIT Press. https://we.riseup.net/assets/459427/Margolis+Jane+Fisher+Allan+Unlocking+the+<br><br>Clubhouse+Women+in+Computing.pdf <br><br>
Massey, Douglas S. 2007 Categorically Unequal: The American Stratification System. Russell Sage Foundation. JSTOR, http://www.jstor.org/stable/10.7758/9781610443807. Accessed 17 May 2025. <br><br>
Mills, C. W. 1959. The Sociological Imagination. Oxford University Press, London. <br><br>
 Sax, Linda J., Katharine J. Lehman, Janet A. Jacobs, Mary A. Kanny, Gloria Lim, Laura Monje-Paulson, and Hannah B. Zimmerman. 2016. “Anatomy of an Enduring Gender Gap: The Evolution of Women’s Participation in Computer Science.” The Journal of Higher Education 88(2):258–293. https://doi.org/10.1080/00221546.2016.1257306
<br><br>
`
  ];
  
  

  const images = [
    {
      src: "images/women-socy-degrees.png",
      caption: "Fig. 1: Timeline showing steep drop in women recieving computer science degrees in the U.S after the 1980s. Source: NSF, 2015."
    },
    {
      src: "images/geeks.jpg",
      caption: "Photo of the geek stereotype being portrayed in Big Bang."
    },
    {
      src: "images/ceos.png",
      caption: "Photo of the top tech CEOS, all male. From left to right: Jeff Bezos (Amazon), Tim Cook (Apple), Mark Zuckerberg (Meta), and Sundar Pichai (Google)."
    },
    {
      src: "images/scale.jpeg",
      caption: "Image of an uneven scale where men hold more weight than women. This symbolizes gender stratification."
    }
  ];
  
  let currentPage = 0;
  
  function renderPage() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("content-wrapper").style.display = "block";
  
    const content = document.getElementById("content");
    const imageTab = document.querySelector(".image-tab");
    content.innerHTML = pages[currentPage];
    // Only show image if one exists for the current page
  if (images[currentPage]) {
    imageTab.innerHTML = `
      <img src="${images[currentPage].src}" alt="Related visual" class="page-image">
      <p class="image-caption">${images[currentPage].caption}</p>
    `;
  } else {
    imageTab.innerHTML = ""; // Clear image if none exists
  }

// Toggle visibility of prev/next buttons based on page index
    document.getElementById("prevBtn").style.display = currentPage > 0 ? "inline-block" : "none";
    document.getElementById("nextBtn").style.display = currentPage < pages.length - 1 ? "inline-block" : "none";

  
    addBackButton();
  }
  
  function nextPage() {
    if (currentPage < pages.length - 1) {
      currentPage++;
      renderPage();
    }
  }
  
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  }
  
  function goToPage(index) {
    currentPage = index;
    renderPage();
  }
  
  function addBackButton() {
    const nav = document.querySelector(".navigation");
    const existing = document.getElementById("backBtn");
    if (!existing) {
      const btn = document.createElement("button");
      btn.id = "backBtn";
      btn.textContent = "← Return to Directory";
      btn.onclick = showLanding;
      nav.prepend(btn);
    }
  }
  
  function showLanding() {
    document.getElementById("content-wrapper").style.display = "none";
    document.getElementById("landing").style.display = "block";
  }
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
  });
  
  window.onload = () => {
    showLanding();
  };
  