import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'

const KnowledgeInput = () => {


    return (
        <div class="mb-4 p-4 bg-blue-50 rounded-lg shadow text-center">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                    <span class="text-blue-600 font-bold text-xl">📘</span>
                </div>
                <h3 class="text-lg font-semibold text-blue-800 mb-1">Knowledge</h3>
                <p class="text-gray-700 mb-2">Upload data to teach LLMs in this tool about a topic</p>
                <div class="row text-center py-1 mt-2">
                    <div class="col-12 mx-auto">
                        <button type="button" class="btn bg-gradient-info btn-sm">+ Add Input</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowledgeInput;