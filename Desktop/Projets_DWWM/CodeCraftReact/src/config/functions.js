//  ENVOI D'UN NOUVEL ARTICLE :
 
 export const handleSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/new-article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur lors de la création de l'article");

      const data = await response.json();
      console.log("Article créé :", data);
      return true;
      // reset form or navigate
    } catch (err) {
      console.error("Erreur : ", err.message);
      return false;
    }
  };