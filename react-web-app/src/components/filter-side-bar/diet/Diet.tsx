import { FormEvent, useState } from "react";

export default function Diet(props: {onDietApply: any}) {

    const map = new Map<string, boolean>();
    const [dietMap, setDietMap] = useState<Map<string, boolean>>(map);

    function dietQuery(event: FormEvent)
    {
        event.preventDefault();

        let dietQueryString = "&diet=";

        for (let key of dietMap.keys())
        {
            if (dietMap.get(key)) dietQueryString = dietQueryString + key + ','
        }

        // if there is no checked boxes, set it to empty string
        if (dietQueryString === "&diet=") dietQueryString = ""
        
        if (props.onDietApply) props.onDietApply(dietQueryString);
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Diet
                </button>
            </h2>
            <form>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckGlutenFree" 
                                onClick={() => {
                                    if (!dietMap.has("glutenFree")) dietMap.set("glutenFree", true);
                                    else if (dietMap.get("glutenFree")) dietMap.set("glutenFree", false);
                                    else dietMap.set("glutenFree", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckGlutenFree">
                            Gluten Free
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckKetogenic" 
                                onClick={() => {
                                    if (!dietMap.has("ketogenic")) dietMap.set("ketogenic", true);
                                    else if (dietMap.get("ketogenic")) dietMap.set("ketogenic", false);
                                    else dietMap.set("ketogenic", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckKetogenic">
                            Ketogenic
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckVegetarian" 
                                onClick={() => {
                                    if (!dietMap.has("vegetarian")) dietMap.set("vegetarian", true);
                                    else if (dietMap.get("vegetarian")) dietMap.set("vegetarian", false);
                                    else dietMap.set("vegetarian", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckVegetarian">
                            Vegetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckLactoVegetarian" 
                                onClick={() => {
                                    if (!dietMap.has("lacto-vegetarian")) dietMap.set("lacto-vegetarian", true);
                                    else if (dietMap.get("lacto-vegetarian")) dietMap.set("lacto-vegetarian", false);
                                    else dietMap.set("lacto-vegetarian", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckLactoVegetarian">
                            Lacto-Vegetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckOvoVegetarian" 
                                onClick={() => {
                                    if (!dietMap.has("ovo-vegetarian")) dietMap.set("ovo-vegetarian", true);
                                    else if (dietMap.get("ovo-vegetarian")) dietMap.set("ovo-vegetarian", false);
                                    else dietMap.set("ovo-vegetarian", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckOvoVegetarian">
                            Ovo-Vegetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckVegan" 
                                onClick={() => {
                                    if (!dietMap.has("vegan")) dietMap.set("vegan", true);
                                    else if (dietMap.get("vegan")) dietMap.set("vegan", false);
                                    else dietMap.set("vegan", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckVegan">
                            Vegan
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckPescetarian" 
                                onClick={() => {
                                    if (!dietMap.has("pescetarian")) dietMap.set("pescetarian", true);
                                    else if (dietMap.get("pescetarian")) dietMap.set("pescetarian", false);
                                    else dietMap.set("pescetarian", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckPescetarian">
                            Pescetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckPaleo" 
                                onClick={() => {
                                    if (!dietMap.has("paleo")) dietMap.set("paleo", true);
                                    else if (dietMap.get("paleo")) dietMap.set("paleo", false);
                                    else dietMap.set("paleo", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckPaleo">
                            Paleo
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckPrimal" 
                                onClick={() => {
                                    if (!dietMap.has("primal")) dietMap.set("primal", true);
                                    else if (dietMap.get("primal")) dietMap.set("primal", false);
                                    else dietMap.set("primal", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckPrimal">
                            Primal
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckLowFodmap" 
                                onClick={() => {
                                    if (!dietMap.has("lowFodMap")) dietMap.set("lowFodMap", true);
                                    else if (dietMap.get("lowFodMap")) dietMap.set("lowFodMap", false);
                                    else dietMap.set("lowFodMap", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckLowFodmap">
                            Low FODMAP
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckWhole30" 
                                onClick={() => {
                                    if (!dietMap.has("whole30")) dietMap.set("whole30", true);
                                    else if (dietMap.get("whole30")) dietMap.set("whole30", false);
                                    else dietMap.set("whole30", true);
                                }} />
                        <label className="form-check-label" htmlFor="flexCheckWhole30">
                            WHOLE30
                        </label>
                    </div>
                </div>

                <button className="submit btn btn-primary ms-4 mb-4" onClick={(event) => dietQuery(event)}>Apply Filter</button>
            </div>
            </form>
        </div>
    )
}