const router = require("express-promise-router")()


const { Workout } = require("../modles")

const getWorkouts = async (response) => {
    const workouts = await Workout.find({}).sort({ day: 1 });
    return response.json(workouts.map((workout) => {
        return {
            ...workout.toJSON(),
            totalDuration: workout.exercises.reduce((total, exercise) => {
                return total + exercise.duration
            }, 0)
        }
    }))
}

router.get("/", (request, response) => {
    return getWorkouts(response)
});

router.get("/range", (request, response) => {
    return getWorkouts(response)
});

router.post("/", async (request, response) => {
    const workout = await (new Workout({ ...request.body, day: new Date() })).save();

    return response.json(workout.toJSON());
});

router.put("/:id", async (request, response) => {
    const { id } = request.params;
    const exerciseData = request.body;

    let workout = await Workout.findById(id);
    if (!workout) workout = new Workout({ day: new Date() });
    workout.exercises.push(exerciseData)
    await workout.save()
    return response.json(workout.toJSON())
});

module.exports = router;