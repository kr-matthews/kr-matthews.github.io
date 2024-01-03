import javaIcon from "../assets/java.png";
import kotlinIcon from "../assets/kotlin.png";
import racketIcon from "../assets/racket.svg";
import reactIcon from "../assets/react.png";
import rubyIcon from "../assets/ruby.png";
import composeIcon from "../assets/jetpack-compose.png";

export function getLanguageIcon(lang) {
  switch (lang) {
    case "Java":
      return javaIcon;
    case "Kotlin":
      return kotlinIcon;
    case "Compose":
      return composeIcon;
    case "Racket":
      return racketIcon;
    case "React":
      return reactIcon;
    case "Ruby":
      return rubyIcon;
    default:
      return undefined;
  }
}
