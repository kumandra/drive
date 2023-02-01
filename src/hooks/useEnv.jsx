export default function useEnv(env) {
	return import.meta.env[env];
}
