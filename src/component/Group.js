import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import Block from './Block'
import { Modal } from '@mui/material'
import Input from '@mui/material'

const Group = ({items, title}) => {
    const n = items.length;
    console.log(n)
    const num_row = Math.ceil(n / 3);
    console.log(num_row)
    function renderRow(items){
        const list_item = items.map(item => <Block title={item.name} description={item.description} input={item.input} output={item.output} url={item.url}></Block>)
        // const list_item = items.map(item => <Modal></Modal>)

        return (
            <div class="row mt-3">
                {list_item}
            </div>
        )
    }

    let list = []
    for (let i = 0 ; i < num_row ; i++){
        let li = []
        if(i === num_row - 1){
            for(let j = i * 3 ; j <= n - 1 ; j++){
                li.push(items[j])
            }
        } else {
            li.push(items[i * 3]);
            li.push(items[i * 3 + 1]);
            li.push(items[i * 3 + 2]);
        }
        list.push(li);
    }
    const list_items = list.map(items => renderRow(items))
    console.log(list)

    return (
        <div class="row pt-lg-6">
            <div class="col-lg-3">
                <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style={{top: '100px'}}>
                    <h3>{title}</h3>
                </div>
            </div>

            <div class="col-lg-9">
                {list_items}
            </div>
        </div>
    );
}

export default Group;

