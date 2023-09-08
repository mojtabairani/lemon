import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTruck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const HomeSpecials = () => {
  return (
    <div className="block px-8 md:px-40 mb-20">
      <div className="flex justify-between mb-16">
        <p className="text-5xl markazi-text">Daily specials!</p>
        <Button classname="p-4 bg-[#F4CE14] text-black rounded-lg hover:scale-105  transition-all duration-300 ease-in-out">
          Online Menu
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 xl:gap-8">
        <div className="card bg-[#F9DABB] rounded-xl mb-4">
          <img
            className="object-cover rounded-xl h-[35vh] w-full"
            src="/assets/Food/12.jpg"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <div className="flex justify-between items-center my-4">
              <div className="card-title text-4xl markazi-text">
                Greek Fruit
              </div>
              <div className="card-price text-5xl markazi-text">$ 14.50</div>
            </div>
            <p className="card-desc text-lg mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, perspiciatis adipisci. Fugiat unde quidem sint laboriosam, soluta voluptates, optio officia temporibus nesciunt deleniti magni ipsa nisi expedita a velit quo.
            </p>
            <div className="flex justify-end">
              <Button classname="p-4 bg-[#EE9990] text-black rounded-lg ">
                <Link to="/construction">
                  Order a delivery &nbsp;{' '}
                  <FontAwesomeIcon className="cursor-pointer" icon={faTruck} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F9DABB] rounded-xl mb-4">
          <img
            className="object-cover rounded-xl h-[35vh] w-full"
            src="/assets/Food/11.jpg"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <div className="flex justify-between items-center my-4">
              <div className="card-title text-4xl markazi-text">
                Greek Salad
              </div>
              <div className="card-price text-5xl markazi-text">$ 14.50</div>
            </div>
            <p className="card-desc text-lg mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem? Voluptatibus ex est suscipit dolore? Odio nesciunt doloribus corrupti ipsum eveniet, recusandae ab unde non, reiciendis cum suscipit eos repudiandae.
            </p>
            <div className="flex justify-end">
              <Button classname="p-4 bg-[#EE9990] text-black rounded-lg ">
                <Link to="/construction">
                  Order a delivery &nbsp;{' '}
                  <FontAwesomeIcon className="cursor-pointer" icon={faTruck} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F9DABB] rounded-xl mb-4">
          <img
            className="object-cover rounded-xl h-[35vh] w-full"
            src="/assets/Food/13.jpg"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <div className="flex justify-between items-center my-4">
              <div className="card-title text-4xl markazi-text">
              Salmon and Zucchini
              </div>
              <div className="card-price text-5xl markazi-text">$ 14.50</div>
            </div>
            <p className="card-desc text-lg mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam at laboriosam, similique ullam rerum enim perferendis pariatur labore possimus natus? Voluptatum quis animi iusto numquam delectus repellat suscipit fuga maxime.
            </p>
            <div className="flex justify-end">
              <Button classname="p-4 bg-[#EE9990] text-black rounded-lg ">
                <Link to="/construction">
                  Order a delivery &nbsp;{' '}
                  <FontAwesomeIcon className="cursor-pointer" icon={faTruck} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSpecials
