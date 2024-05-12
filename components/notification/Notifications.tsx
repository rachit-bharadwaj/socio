import Notification from "@/templates/notification/Notification"
import { GoHeart } from "react-icons/go"



const Notifications = () => {
  return (
    <section className="p-3">
        <p className="py-5">Notifications</p>
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
        <Notification message="Sahil, Garima and 43 others liked your photo." timestamp="14 min ago" Icon={GoHeart} />
    </section>
  )
}

export default Notifications