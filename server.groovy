@RestController
@CrossOrigin
class ThisWillActuallyRun {
	List<String> names = new ArrayList<>("Joe");

	@RequestMapping("/serverName")
	String home() {
		return "Dave Lister"
	}

	@RequestMapping("/")
	List<String> getNames() {
		return names;
	}
}