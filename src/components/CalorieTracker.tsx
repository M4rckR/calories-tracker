import { useMemo } from "react"
import { Activity } from "../types"
import { CaloriesDisplay } from "./CaloriesDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export const CalorieTracker = ({activities}:CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? 
        total + activity.calories : total, 0), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? 
        total + activity.calories : total, 0), [activities])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])


  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">
            Resumen de Calorias
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CaloriesDisplay
                calories={caloriesConsumed}
                text="Consumidas"
            />
            <CaloriesDisplay
                calories={caloriesBurned}
                text="Quemadas"
            />
            <CaloriesDisplay
                calories={netCalories}
                text="Diferencia"
            />
        </div>
    </>
  )
}
