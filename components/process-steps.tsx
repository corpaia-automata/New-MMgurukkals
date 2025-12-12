interface ProcessStepsProps {
  steps: Array<{
    number: number
    title: string
    description: string
  }>
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-2xl mb-4 flex-shrink-0">
              {step.number}
            </div>
            <h4 className="font-serif font-bold text-lg text-center mb-2">{step.title}</h4>
            <p className="text-foreground/70 text-sm text-center">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-8 left-full w-4 h-0.5 bg-primary/30" />
          )}
        </div>
      ))}
    </div>
  )
}
