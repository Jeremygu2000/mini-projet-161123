let apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pYWV4dWh6Zm9vZGVhZ2xjemF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzE2MzIsImV4cCI6MjAwMzAwNzYzMn0.2VgfS-TbPp2_xRlvP2J9NEY3IWq-q0La51o1EJa9Ufc";
const app = express();
app.get("/pokemon", async (req, res) => {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/table_name`, {
      headers: {
        apikey: apikey,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching table_name error data");
    }
    const pokemonData = await response.json();
    res.json({ pokemonData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3000, () => console.log("Server is listening to port 3000")); (modifié) 











