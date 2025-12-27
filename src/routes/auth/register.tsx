import { RegisterForm } from '@/components/auth/register-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen">
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 lg:w-1/2">
        <RegisterForm className="w-full max-w-md" />
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img
          src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1766788560/samples/ash-EYx3CulRcJE-unsplash_t5l7vo.jpg"
          alt="Authentication background"
          className="max-h-screen w-full object-cover"
        />
      </div>
    </main>
  )
}
