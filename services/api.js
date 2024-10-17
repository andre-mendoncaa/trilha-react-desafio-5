import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fmagewbbnwjvdysavyff.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtYWdld2JibndqdmR5c2F2eWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNzExNDgsImV4cCI6MjA0NDc0NzE0OH0.jtuqnxhlTVJMHzzBGLwGxZ_0e7q8ekEhSF0VnjIGKFc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtYWdld2JibndqdmR5c2F2eWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNzExNDgsImV4cCI6MjA0NDc0NzE0OH0.jtuqnxhlTVJMHzzBGLwGxZ_0e7q8ekEhSF0VnjIGKFc"
    }
})