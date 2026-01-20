import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";

const API_MEDIA_URL = import.meta.env.VITE_API_MEDIA_URL;

export default function TrainerCard({ trainer }) {
    const trainerImageUrl = `${API_MEDIA_URL}/${trainer.picture}`;

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="220"
                image={trainerImageUrl}
                alt={trainer.name}
                sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {trainer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Nivel: {trainer.experience_level || "Entrenador Base"}
                </Typography>
            </CardContent>
            <CardActions sx={{ borderTop: '1px solid #eee' }}>
                <Button size="small" variant="contained" fullWidth>Ver Perfil</Button>
            </CardActions>
        </Card>
    );
}