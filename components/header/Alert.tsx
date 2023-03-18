import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <div class="md:hidden">
        <Slider class="bg-black gap-6 scrollbar-none">
          {alerts.map((alert) => (
            <Text
              class="flex justify-center items-center w-screen h-[38px]"
              variant="caption"
              tone="default-inverse"
            >
              {alert}
            </Text>
          ))}
        </Slider>

        <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
      </div>
      <div class="hidden md:block">
        <div class="flex flex-row justify-around bg-black">
          {alerts.map((alert) => (
              <Text
                class="flex justify-center items-center h-[38px] underline cursor-pointer"
                variant="caption"
                tone="default-inverse"
                
              >
                {alert}
              </Text>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Alert;
