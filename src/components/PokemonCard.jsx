import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="200"
        image={pokemon.picture}
        alt={pokemon.name}
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5">{pokemon.name}</Typography>
        <Typography variant="body2">
          Tipo: {pokemon.type}
        </Typography>
      </CardContent>
    </Card>
  );
}
